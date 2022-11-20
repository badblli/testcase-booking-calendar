import { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
// import '../styles/react-datepicker-local.css'
import moment from 'moment';

export default function Textbox(start, end) {
    const days = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct']
    const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']

    const locale = {
        localize: {
            day: n => days[n],
            month: n => months[n]
        },
        formatLong: {
            date: () => 'mm/dd/yyyy'
        }
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        console.log(start, end)
    };
    return (
        <>
            <DatePicker
                locale={locale}
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                monthsShown={3}
                minDate={moment().toDate()}

            />
        </>
    )
}