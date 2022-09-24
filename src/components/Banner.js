import React, { useEffect, useRef, useState } from "react";
import { FaClock } from "react-icons/fa";
export default function Banner({ banner, countdown, date, title, addclass, text }) {
    const [timerDays, setTimerDays] = useState("00");
    const [timerHours, setTimerHours] = useState("00");
    const [timerMinutes, setTimerMinutes] = useState("00");
    const [timerSeconds, setTimerSeconds] = useState("00");
    const [display, setDisplay] = useState(true);

    let interval = useRef();
    const startTimer = () => {
        const countdownDate = new Date(countdown).getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                setDisplay(false);
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    });
    return (
        <>
            <div className="mint-container">
                <div className="mint-inner-container">
                    <img src={banner} alt="Mint banner" className={addclass} />
                </div>
                {
                    display ? <div className="mint-countdown"><FaClock /> {timerDays}d {timerHours}h {timerMinutes}m {timerSeconds}s</div> : <div className="mint-countdown">{text}</div>
                }
                <p className="date">{date}</p>
                <p className="title">{title}</p>
            </div>
        </>
    );
}
