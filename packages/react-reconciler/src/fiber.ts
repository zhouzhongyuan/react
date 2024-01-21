import { Props, Key, Ref } from "shared/ReactType";
import { WorkTag } from "./workTag";
import { Flags, NoFlags } from "./fiberFlags";

export class FiberNode {
    // instance
    tag: WorkTag;
    key: Key;
    stateNode: any;
    type: any;
    // tree structure
    return: FiberNode | null;
    sibling: FiberNode | null;
    child: FiberNode | null;
    index: number;
    ref: Ref;
    // as work unit (工作单元)
    pendingProps: Props | null;
    memoizedProps: Props | null;
    flags: Flags;

    constructor(tag: WorkTag, pendingProps: Props, key: Key) {

        // instance
        this.tag = tag;
        this.key = key;
        this.stateNode = null; // div DOM节点
        this.type = null; // Fiber Node类型，对于function component，其值为function本身。

        // tree structure
        this.return = null;
        this.sibling = null;
        this.child = null; // first child
        this.index = 0; // index in parent children
        this.ref = null;
        // as work unit (工作单元)
        this.pendingProps = pendingProps;
        this.memoizedProps = null;
        this.flags = NoFlags;
    }
}