declare interface ArrayObject {
	[prop: string]: any[]
}

declare interface StringObject {
	[prop: string]: string
}

declare interface AnyObject {
	[prop: string]: any
}

declare interface Fn<Return> {
	(...params: any[]): Return
}
