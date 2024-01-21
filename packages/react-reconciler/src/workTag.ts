export const FunctionComponent = 0;
export const HostRoot = 3; // render 挂载的根节点
export const HostComponent = 5; // 原生dom节点
export const HostText = 6; // 文本节点

export type WorkTag = typeof FunctionComponent | typeof HostRoot |
    typeof HostComponent | typeof HostText;