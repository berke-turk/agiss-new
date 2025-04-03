export default interface Version {
    version_id?: string,
    version_platform: string,
    version_number: number,
    version_name?: string,
    prev_version_number?: number,
    prev_version_name?: string,
    is_required?: boolean,
    created_at?: string,
    updated_at?: string
}