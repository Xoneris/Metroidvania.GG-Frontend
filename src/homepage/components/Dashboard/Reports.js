import { useState, useEffect, useContext } from "react";
import { apiUrlContext } from "../../Homepage";
import Loading from "../Loading";


export default function Reports() {

    const apiBaseUrl = useContext(apiUrlContext);
    const [allReports, setAllReports] = useState([])
    const [reportStatus, setReportStatus] = useState("open")
    const [loading, setLoading] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const form = e.target;
    //     const reportGame = form.elements["gameName"].value;
    //     const reportMessage = form.elements["gameReport"].value;

    //     const reportData = {
    //         game: reportGame,
    //         report: reportMessage,
    //         status: "open",
    //     }

    //     try {
    //         const res = await fetch( apiBaseUrl + "/api/report", {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(reportData),
    //         })
    //         const result = await res.json();
    //         setResponse(result);
    //       } catch (error) {
    //         console.error('Error making POST request:', error);
    //       }
    // }

    useEffect(() => {
        setLoading(true)
        fetch( apiBaseUrl + "/api/report")
            .then((response) => {return response.json()})
            .then(data => {
                setAllReports(data)
                setLoading(false)
           })
            .catch((error) => {
                 console.log(error)
                 setLoading(false)
            })
    }, [])

    return (
        <>
            <h2>Reports {loading === false ? "- " + allReports.length : null}</h2>
            <hr/>
            {loading === true
            ? <Loading/>
            : <>
            <div className="ReportMenu">
                <div 
                    className={reportStatus === "open" ? "active" : ""} 
                    onClick={() => {setReportStatus("open")}}>
                        Open Report
                </div>
                <div 
                    className={reportStatus === "closed" ? "active" : ""} 
                    onClick={() => {setReportStatus("closed")}}>
                        Closed Reports
                </div>
            </div>
            <table>
                <thead>
                    <td>Game</td>
                    <td>Report</td>
                    <td>Status</td>
                </thead>
                {allReports.filter((report) => report.status === reportStatus).map((report) => (
                    <tbody>
                        <td>{report.game_name}</td>
                        <td>{report.report}</td>
                        <td>{report.status}</td>
                    </tbody>
                ))}
            </table>
            </>}
        </>
        
    )
}