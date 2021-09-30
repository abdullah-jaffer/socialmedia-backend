export const paginationObject = (limit: any, offset:any) => {
    let pagination: any = {}
    offset? pagination.offset = Number(offset): null;
    limit? pagination.limit = Number(limit): null;
    return pagination;
}