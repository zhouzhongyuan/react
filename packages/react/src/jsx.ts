import { REACT_ELEMENT_TYPE } from "shared/ReactSymbols";
import { Type, Key, Ref, Props, ElementType, ReactElementType } from "shared/ReactType";

// React.Element 
const ReactElement = (type: Type, key: Key, ref: Ref, props: Props): ReactElementType => {
    const element = {
        $$typeof: REACT_ELEMENT_TYPE,
        type,
        key,
        ref,
        props,
        _mark: 'Zhongyuan'

    };
    return element;
}

export const jsx = (type: ElementType, config: any, ...maybeChildren) => {
    let key: Key = null;
    let ref: Ref = null;
    const props: Props = {};

    for (const prop in config) {
        if (prop === 'key') {
            if (config[prop] !== undefined) {
                key = '' + config[prop];
            }
            continue;
        }
        if (prop === 'ref') {
            if (config[prop] !== undefined) {
                ref = config[prop];
            }
            continue;
        }
        if (Object.prototype.hasOwnProperty.call(config, prop)) {
            props[prop] = config[prop];
        }
    }

    const maybeChildrenLength = maybeChildren.length;
    if (maybeChildrenLength === 1) {
        props.children = maybeChildren[0];
    } else if (maybeChildrenLength > 1) {
        props.children = maybeChildren;
    }
    return ReactElement(type, key, ref, props);

}

export const jsxDEV = jsx;