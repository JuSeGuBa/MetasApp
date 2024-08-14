
function Bond({children, text, href}) {
    return (
        <a href={href} className="bond">
            {children}
            <span>{text}</span>
        </a>
    );
}

export default Bond;