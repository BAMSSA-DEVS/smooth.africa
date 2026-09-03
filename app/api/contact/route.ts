import { NextRequest, NextResponse } from 'next/server';

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

export async function POST(req: NextRequest) {
  try {
    const { name, email, organization, interest } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    if (!NOTION_TOKEN || !NOTION_DATABASE_ID) {
      console.error('Notion env vars not configured.');
      return NextResponse.json(
        { error: 'Submission is not configured.' },
        { status: 500 }
      );
    }

    const payload = {
      parent: { database_id: NOTION_DATABASE_ID },
      properties: {
        Name: { title: [{ text: { content: name } }] },
        Email: { email },
        Organization: { rich_text: [{ text: { content: organization || '' } }] },
        Interest: { select: interest ? { name: interest } : null },
      },
    };

    const res = await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error('Notion API error', res.status, errText);
      return NextResponse.json(
        { error: 'Failed to submit to Notion.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact route error', err);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}