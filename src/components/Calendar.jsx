import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                        <tr>
                            <td></td>
                            <td>Sunday</td>
                            <td>Monday</td>
                            <td>Tuesday</td>
                            <td>Wednesday</td>
                            <td>Thursday</td>
                            <td>Friday</td>
                            <td>Saturday</td>
                        </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Fancy Dinner 🎩' location='Maple & Ash' color="green"/>
                        <Event event='Team Meeting 🧑‍💼' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Starbucks ☕️' color ='pink'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='Gym 💪' color='green'/>
                        <Event event='The Bean 🫘' color ='blue'/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <Event event='Study Session 📚' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event='Brunch 🍳' location='Little Goat Diner' color='pink'/>
                        <td></td>
                        <Event event='Client Call 📞' location='Zoom Room 3' color='blue'/>
                        <td></td>
                        <Event event='Research 🧭' location='Main Library' color='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch with Alex 🥗' location='Sweetgreen' color='green'/>
                        <td></td>
                        <td></td>
                        <Event event='Quick Review ✅' location='Meeting Room B' color='blue'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='Design Workshop 🎨' location='Creative Studio' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Code Pairing 👩‍💻' location='Floor 4 Pod 2' color='blue'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Sprint Planning 🏃' location='Conference Room A' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <Event event='Coffee Break ☕' location='Kitchen Lounge' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Interview 🎤' location='Room 305' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='Wrap-up ✍️' location='Team Area' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5pm</td>
                        <td></td>
                        <Event event='Happy Hour 🍻' location='Pub on 4th' color='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='Dinner Prep 🍝' location='Home Kitchen' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar