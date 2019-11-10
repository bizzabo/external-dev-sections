declare interface Section {
    id: string,
    rootKey: string,
    elements: Element[],
}

declare interface Element {
    id: string
    rootKey: string,
    type: string
}

declare interface Contact {
    id?: number,
    thumbnailUrl?: string,
    firstName?: string,
    lastName?: string,
    speakerId?: number,
    facebookPage?: string,
    linkedinPage?: string,
    twitter?: string
}

declare interface DisplayAttribute {
    keyName?: string,
    show?: boolean,
    type?: string
}

declare interface Header extends Element {
    text?: string
}

declare interface People extends Element {
    contacts?: Contact[],
    displayAttributes: DisplayAttribute[],
    contactListId: number
}

export default Section;