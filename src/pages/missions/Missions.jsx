import "./Missions.css";
import missions from "../../data/missions.json";

function Missions() {
    return (
        <div className="News-main-container">
            <h2 id="tittleNews">Misiones Helldivers</h2>
            <div className="News-container">
                {missions.map((mission) => (
                    <div key={mission.id} className="New1">
                        <img src={mission.image} alt={mission.title} />
                        <h3>{mission.title}</h3>
                        <p>{mission.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Missions
