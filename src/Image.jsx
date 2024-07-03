import styles from "./Image.module.scss";

export default function ImageReact({
    source = "https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png",
}) {
    return (
        <>
            <img className={styles.image} src={source} alt="logo de react.js" />
            <ImageVite />
        </>
    );
}

export function ImageVite({
    source = "https://vuefes.jp/2023/store/vite-badge.png",
}) {
    return (
        <>
            <img className={styles.image} src={source} alt="logo de vite.js" />
        </>
    );
}
