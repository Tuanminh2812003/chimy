import React, { useState } from "react";
import "./Flashcard.scss";
import { Link } from "react-router-dom";

function Flashcard({ sectionData, title, color, id }) {
  const [showMore, setShowMore] = useState(false); // Trạng thái hiển thị thêm

  // Số lượng items hiển thị ban đầu
    const initialItems = 6;

    const handleShowMore = () => {
        setShowMore(!showMore); // Toggle trạng thái
    };

    return (
        <div className="flashcard" style={{ "--hover-color": color || "#89231E" }} id={id}>
            <div className="flashcard__inner">
                {/* Header */}
                <div className="flashcard__inner__header" style={{ color: color || "#000" }}>
                <div className="flashcard__inner__header__title">{title}</div>
                </div>

                {/* Content */}
                <div className="flashcard__inner__content">
                {(showMore ? sectionData : sectionData.slice(0, initialItems)).map((item) => (
                    <Link to={item.web || "#"} key={item.id} className="flashcard__inner__content__item" style={{backgroundColor: color, textDecoration:"none"}}>
                        {/* <img alt={`Image ${item.id}`} src={item.url} /> */}
                        <div style={{color: "white", textAlign: "center"}}>
                            {item.name}
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </div>
    );
}

export default Flashcard;
