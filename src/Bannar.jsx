import React from 'react'

export default function Bannar() {
    return (
        <div className="bannar">
            <div className="bannar-container">
                <h2>أكبر سوق عربي للخدمات المصغرة</h2>
                <p>أنجز أعمالك بسهولة وأمان بأسعار تبدأ من 5$ فقط</p>
                <form action="">
                    <input type="text" placeholder='ابحث عن خدمة' />
                    <button type='submit'>بحث</button>
                </form>
                <div className="sug">
                    <span>كلمات شائعة </span>
                    <button className="sug-btn">تصميم داخي</button>
                    <button className="sug-btn"> وورد بريس</button>
                    <button className="sug-btn"> هوية بصرية</button>
                    <button className="sug-btn"> استشارات تسويقية</button>
                </div>
            </div>
        </div>
    )
}
