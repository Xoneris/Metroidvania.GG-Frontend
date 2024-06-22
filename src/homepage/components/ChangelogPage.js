import ChangelogCard from "./ChangelogCard";

function ChangelogPage () {

    return (
        <section className="ChangelogPage">
            <h2>Changelog</h2>
            <hr/>
            <div className="wrapper">
                {/* <ChangelogCard 
                    changelogDate=""
                    changelogArray={[
                        '',
                    ]}
                /> */}
                <ChangelogCard 
                    changelogDate="June 22nd"
                    changelogArray={[
                        'Added a Changelog page to the website. So changelogs can be viewed on the website aswell and not just on the Discord',
                    ]}
                />
                <ChangelogCard 
                    changelogDate="June 10th"
                    changelogArray={[
                        "Added 6 new pages for different Platforms: Steam, Epic Games, GoG, Playstation, Xbox, Switch.",
                        "Each page displays games that are available for that platform!",
                        'Added a new Navigation element called "Platforms" to find these 6 pages.'
                    ]}
                />
                <ChangelogCard 
                    changelogDate="June 6th"
                    changelogArray={[
                        'Remade the visual side of the search function of the website. Should be more user friendly and just in general more "modern".',
                    ]}
                />
                <ChangelogCard 
                    changelogDate="June 1st"
                    changelogArray={[
                        "Added 9 more games",
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 23rd"
                    changelogArray={[
                        "The website can now be accessed again via the https://metroidvania.gg/ url!",
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 22nd"
                    changelogArray={[
                        "Added 4 more games that release June/July",
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 20th"
                    changelogArray={[
                        "Games that have been released (full or into Early Access) now display the Steam review score on the details page of the game!",
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 19th"
                    changelogArray={[
                        'The site now remembers what year you selected on the "Released" page. For example you go to 2021, click on a game and click the back button you will still be on the 2021 page instead of it reverting back to 2024.',
                        'In the rare case that 2 or more games share the same release date, the frontpage banner section will now randomly pick between those for the "Latest Release" and "Coming up next" section.',
                        'Added 4 more games submitted via the Form.'
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 11th"
                    changelogArray={[
                        'The site now remembers if you clicked the "Hide Thumbnails" or "Show Thumbnails" button on the "All Games" Page.',
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 9th"
                    changelogArray={[
                        'Game thumbnails on the "All Games" page dont show by default anymore. Now by default its just the name of the game. This change is for people with slower Internet, who have problems loading in like 200 images at the same time.',
                        'There is a button on the "All Games" page now that shows all the thumbnails of games for people who want that.',
                        'Added 4 games today and like... 2 or 3 in the past few days.'
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 2nd"
                    changelogArray={[
                        'Added another 9 games.',
                        'On the "All Games" page when you click on a letter there will now be a scroll animation, instead of an instant hop.',
                        'On the "All Games" page there is now a "Back to Top" button in the bottom left of the screen.'
                    ]}
                />
                <ChangelogCard 
                    changelogDate="May 1st"
                    changelogArray={[
                        'Added 11 more games. 1 submitted from a dev, 10 I personally just wanted to add lol.',
                        'On the "Released" page you now have a dropdown menu where you can select the year instead of buttons for years. Doesnt look very visual appealing, but it works.',
                        'Added another 2 games, which both release in May.'
                    ]}
                />
                <ChangelogCard 
                    changelogDate="April 29th"
                    changelogArray={[
                        'Added 13 more games. 11 of which were added thanks to the help of Alie',
                        'The title of a game will now show when you hover over the thumbnails of a game.',
                        'Added new functionality to the Hero section. When there is no ongoing Kickstarter campaign for something it will instead randomly display a game that has an upcoming Kickstarter in the future.'
                    ]}
                />
                <ChangelogCard 
                    changelogDate="April 27th"
                    changelogArray={[
                        'Added 13 more games.',
                    ]}
                />
                <ChangelogCard 
                    changelogDate="April 26th"
                    changelogArray={[
                        'Fixed a small visual bug on iOS',
                        'Added 3 more games.',
                        'Added another 8 games.',
                    ]}
                />
                <ChangelogCard 
                    changelogDate="April 25th"
                    changelogArray={[
                        'Fixed a small visual bug while using the Firefox browser.',
                        'Added 8 more games to the website. All submitted via the submission form!'
                    ]}
                />
            </div>
        </section>
    )
}

export default ChangelogPage;