function ChangelogCard ({changelogDate, changelogArray}) {

    return (
        <card>
            <u><h3>{changelogDate}</h3></u>
            {/* <hr/> */}
            <ul>
                {changelogArray.map(changelog => (
                    <li>{changelog}</li>
                ))}
            </ul>
        </card>
                
    )
}

export default ChangelogCard;