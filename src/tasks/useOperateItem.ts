import type { ItemType } from "./Folder.vue";

export const useOperateItem = (item: ItemType) => {
    const rename = (newName: string) => {
        if (newName.length)
            item.name = newName;
        else throw new Error('ERROR: NAME CAN NOT BE EMPTY');
    }
    const remove = () => {
        if (item.parentFolder && item.parentFolder.items.includes(item))
            item.parentFolder.items = item.parentFolder.items.filter((file) => item !== file);
        else throw new Error('ERROR: YOU HAVE TRIED TO REMOVE THE ROOT DIRECTORY FOLDER');
    }

    return { rename, remove };
}