export class ItemType {
    private _name: string;
    protected parentFolder?: Folder;

    constructor(name: string, parentFolder?: Folder) {
        this._name = name;
        this.parentFolder = parentFolder;
        if (this.parentFolder)
            this.parentFolder.addChild(this);
    }

    public delete = () => {
        if (this.parentFolder)
            this.parentFolder.removeChild(this);
        else throw new Error('ERROR: YOU HAVE TRIED TO REMOVE THE ROOT DIRECTORY FOLDER');
    }

    public rename = (newName: string) => {
        this._name = newName;
    }

    public get name(): string {
        return this._name;
    }
}

export class Folder extends ItemType {
    private _items: ItemType[];
    private _fileIconColor: string;
    constructor(name: string, fileIconColor: string, parentFolder?: Folder) {
        super(name, parentFolder);
        this._fileIconColor = fileIconColor;
        this._items = [];
    }

    public addChild = (child: ItemType) => {
        this._items.push(child);
    }

    public removeChild = (child: ItemType) => {
        if (!(this._items.includes(child))) throw new Error('ERROR: COMPONENT DOES NOT EXIST IN PARENT FOLDER');
        this._items = this._items.filter((item) => (item !== child));
    }

    public get items(): ItemType[] {
        return this._items;
    }
    public get fileIconColor(): string {
        return this._fileIconColor;
    }
}

export class File extends ItemType {
    constructor(name: string, parentFolder: Folder) {
        super(name, parentFolder);
    }

    public get iconColor(): string {
        return this.parentFolder?.fileIconColor ?? 'white';
    }
}

export const root = new Folder('ROOT', "white");

const Folder1 = new Folder('Dir1', "black", root);
const Folder11 = new Folder('Dir1-1', "pink", Folder1);
const File111 = new File('File1-1-1', Folder11);

const Folder2 = new Folder('Dir2', "green", root);
const Folder21 = new Folder('Dir2-1', "yellow", Folder2);
const File211 = new File('File2-1-1', Folder21);

const File1 = new File('File1', root);