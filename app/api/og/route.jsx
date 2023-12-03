import { ImageResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request) {
    try {
        //api/og?title
        const { searchParams, protocol, host } = new URL(request.url);

        const title = searchParams.get("title") || "BiyeKorun";
        const author = searchParams.get("author") || "Anonymous";
        const date = searchParams.get('date') || new Date()
        const cover = searchParams.get('cover')
        const coverUrl = cover && `${protocol}//${host}/_next/image?url=${encodeURIComponent(cover)}&w=1200&q=75`
        return new ImageResponse(
            <div style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: "stretch",
                backgroundColor: "rgba(244, 42, 65, 0.1)"
            }}>
                {
                    coverUrl &&
                    <img src={coverUrl} alt="" style={{ width: "100%", height: "100%", objectFit: 'cover', objectPosition: 'center' }} />
                }
                <div style={{
                    backgroundColor: 'white',
                    display: "flex",
                    flexDirection: 'column',
                    padding: "10px"
                }}>
                    <div style={{
                        fontSize: "30px",
                        marginBottom: "8px",
                        fontWeight: 'bolder'
                    }}>{title}</div>

                    <div>
                        {author + " - " + new Date(date).toLocaleDateString('en-Us', { dateStyle: "long" })}
                    </div>
                </div>
            </div>
        )
    } catch (error) {
        return new Response("Failed to generate OG image", { status: 500 })
    }
}