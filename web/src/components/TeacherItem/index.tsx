import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface Props {
    name: string;
    class: string;
    description: string;
    pricePerHour: string;
}

const TeacherItem: React.FC<Props> = (props) => {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src={`https://api.adorable.io/avatars/81/${props.name}.png`}
                    alt="Professor"
                />
                <div>
                    <strong>{props.name}</strong>
                    <span>{props.class}</span>
                </div>
            </header>

            <p>{props.description}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>{props.pricePerHour}</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;
