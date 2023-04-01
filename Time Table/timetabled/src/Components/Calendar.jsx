import React from "react";
import Event from "./event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="Time">8 AM</td>
                        <Event event='Church' instructor='Church of Pentecost' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">9 AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">10 AM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Gym' instructor='The Rec Plex' color='blue'/>
                    </tr>
                    <tr>
                        <td className="Time">11 AM</td>
                        <td></td>
                        <td></td>
                        <Event event='Project Mgt' instructor='Instructor: Dr Raman' color='green'/>
                        <td></td>
                        <Event event='Project Mgt' instructor='Instructor: Dr Raman' color='green'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">12 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">1 PM</td>
                        <td></td>
                        <Event event='Finance 301' instructor='Instructor: Dr Mundew' color='pink'/>
                        <td></td>
                        <Event event='Finance 301' instructor='Instructor: Dr Mundew' color='pink'/>
                        <td></td>
                        <Event event='Finance 301' instructor='Instructor: Dr Mundew' color='pink'/>
                        <Event event='Cybersecurity' instructor='Codepath' color='blue'/>
                    </tr>
                    <tr>
                        <td className="Time">2 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">3 PM</td>
                        <td></td>
                        <Event event='SQL Class' instructor='Instructor: Dr Zolbanin' color='pink' />
                        <td></td>
                        <Event event='SQL Class' instructor='Instructor: Dr Zolbanin' color='pink' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">4 PM</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="Time">5 PM</td>
                        <td></td>
                        <td></td>
                        <Event event='Advanced Wed Dev' instructor='Instructor: Dr Prasad' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;