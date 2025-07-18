export default interface Paper {
    paper_id: string,
    title?: string,
    seo?: string,
    description?: string,
    keywords?: string,
    volume?: string,
    sub_volume?: string,
    read_count?: string,
    img?: string,
    file_url?: string,
    status: 'active' | "passive", // active - passive
    created_at?: string,
    formatted_created_date?: string,
    updated_at?: string
}

// GET -> api/paper?id={paper_id}
// GET -> api/paper?seo={paper_id}
// PUT -> api/paper?id={paper_id}
// POST -> api/paper
// DELETE -> api/paper?id={paper_id}