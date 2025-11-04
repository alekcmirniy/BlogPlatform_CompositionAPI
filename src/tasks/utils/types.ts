export type ItemType = FileType | FolderType;

export type FolderType = {
    name: string,
    parentFolder: FolderType | null,
    items: ItemType[],
    fileIconColor: string
}

export type FileType = {
    name: string,
    parentFolder: FolderType | null
}