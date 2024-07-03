import styles from "./Hello.module.scss";

export default function Hello({ name = "Benjamin" }) {
    console.log("Hello", name);
    return (
        <>
            <h1 className={styles.title}>
                <span className={styles.firstLetter}>B</span>onjour, {name}
            </h1>
            <Greeting />
        </>
    );
}

export function Greeting({ name = "Benjamin", age = "30" }) {
    return (
        <h2>
            Bienvenue dans le mode de react js {name} !! vous avez commencer a
            apprendre le framework react a {age} ans.
        </h2>
    );
}
