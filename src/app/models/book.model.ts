export class Book {
    ID: string
    URL: string
    Status: boolean
    Info: any
    Index: number

    constructor(ID: string, URL: string, Status: boolean, Info: any, Index: number) {
        this.ID = ID
        this.URL = URL
        this.Status = Status
        this.Info = Info
        this.Index = Index
    }
}
