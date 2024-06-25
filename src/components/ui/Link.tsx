/**
 * Link 는 url 이동이 가능해야하고, a 태그 또는 button 태그로 동작할 수 있어야 한다.
 * a 태그의 어트리뷰트를 받을 수 있어야한다.
 * button 태그의 어트리뷰트를 받을 수 있어야한다.
 * 어트리뷰트가 타입추론이 가능해야한다.
 *
 * ref
 */

type LinkProps<T extends "a" | "button"> = {
    tag?: T;
} & React.ComponentPropsWithoutRef<T>;

export function Link<T extends "a" | "button">({
    tag,
    ...props
}: LinkProps<T>) {
    const Element = (tag ?? "a") as React.ElementType;
    return <Element {...props} />;
}

function Render() {
    return <Link tag="button" href="" />;
}
