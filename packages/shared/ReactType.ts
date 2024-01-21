
export type Type = any;
export type Props = any;
export type Key = string | null;
export type Ref = any;
export type ElementType = any;


export interface ReactElementType {
    $$typeof: symbol | number;
    type: ElementType;
    props: Props;
    key: Key;
    ref: Ref;
    _mark: string;
}