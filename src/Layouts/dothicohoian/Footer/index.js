
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";

function Footer(){
    const [showSource, setShowSource] = useState(false);
    
    const toggleSource = () => {
        setShowSource(!showSource); // Chuyển đổi trạng thái
    };
    return(
        <>
            <div className="Footer">
                <div className="container">
                    <div className="Footer__inner">
                        <div className="Footer__inner__row">
                            <div className="Footer__inner__title">
                                Dự án HERITAGE FLASH XR
                            </div>
                            <img src="/Logo.png" alt="logo"/>
                        </div>
                        <div className="Footer__inner__row">
                        <div className="Footer__inner__title">
                                Hướng dẫn chuyên môn
                            </div>
                            <div className="Footer__inner__disc">
                                PGS.TS Nguyễn Mạnh Hường
                            </div>
                        
                            <div className="Footer__inner__title">
                                Tham vấn chuyên môn
                            </div>
                            <div className="Footer__inner__disc">
                            GS.TS. NGND Đỗ Thanh Bình
                            </div>
                            <div className="Footer__inner__disc">
                            TS. Nguyễn Văn Ninh
                            </div>
                            <div className="Footer__inner__disc">
                            PGS.TS Phan Ngọc Huyền
                            </div>
                        </div>
                        <div className="Footer__inner__row r2">
                            <div className="Footer__inner__title">
                                Đơn vị bảo trợ và tài trợ
                            </div>
                            <div className="Footer__inner__disc">
                                Hội Di sản Văn hoá Việt Nam
                            </div>
                            <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                <div className="Footer__inner__disc">
                                    Quỹ Hỗ trợ bảo tồn di sản văn hoá Việt Nam
                                </div>
                            </Link>
                            <div className="Footer__inner__disc">
                                Công ty Cổ phần Công nghệ Giáo dục AES
                            </div>
                        </div>
                        <div className="Footer__inner__row r3">
                            <div className="Footer__inner__title">
                                Liên hệ
                            </div>
                            <div className="Footer__inner__icon">
                                <Link to="">
                                    <FaFacebook />
                                </Link>
                                <Link to="">
                                    <FaInstagram />
                                </Link>
                                <Link to="https://www.youtube.com/watch?v=mZ_Y6QkbSy4&feature=youtu.be">
                                    <FaYoutube />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer__copy">
                    <div className="container">
                        <div className="Footer__copy__inner">
                        <div className="Footer__copy__inner__text" onClick={toggleSource} style={{ cursor: "pointer", color: "blue" }}>
                                {showSource ? "Thu gọn" : "Ấn để xem nguồn"}
                            </div>
                            {showSource && (
                                <>
                                    <div className="Footer__copy__inner__text">
                                1. Di tích kiến trúc nghệ thuật Đô thị cổ Hội An (Cục di sản văn hóa)
                            </div>
                            <div className="Footer__copy__inner__text">
                                2. 25 năm Hội An là Di sản Văn hóa thế giới: Dấu ấn di sản và hành trình bảo tồn (VietnamPlus)
                            </div>
                            <div className="Footer__copy__inner__text">
                                3. Đô thị cổ Hội An được Tổ chức UNESCO công nhận là di sản văn hóa thế giới (Cổng thông tin điện tử thành phố Đà Nẵng)
                            </div>
                            <div className="Footer__copy__inner__text">
                                4. Hội An (hoianworldheritage)
                            </div>
                            <div className="Footer__copy__inner__text">
                                5. Giá trị khu phố cổ Hội An trong phát triển du lịch (VHNT)
                            </div>
                                </>
                            )}
                            <div className="Footer__copy__inner__aes">
                                © Copyright 2024 AES, All rights reserved
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;