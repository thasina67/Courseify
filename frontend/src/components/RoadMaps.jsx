import React from 'react'
import '../styles/RoadMaps.css'
import Logo from '../core/logo/logo'
import SearchBar from '../core/searchBar/searchBar'
import Notification from '../core/notification/notification'
import Profile from '../core/profile/profile'
import RoadMapCard from '../core/roadmapBox//roadMapBox'

export const RoadMaps = () => {
    
  return (
    <>
    <div className="header">
        <div className="headerleft">
            <Logo/>
        </div>
        <div className="headercenter">
            <div className="roadmapheadertext">
                <p className='roadmapheadertextmain'>  Chart Your Path to Progress </p>
            </div>
        </div>
        <div className="headerright">
            <SearchBar/>
            <Notification/>
            <Profile/>
        </div>
    </div>
    
    <div className="divider">
        <span className="styled-text">
            Role Based Roadmaps
        </span>
    </div>
    <div className="roadmapcontainer">
        <div className="line1">
            <RoadMapCard
                title = "Frontend"
                link = "https://roadmap.sh/frontend"
            />
            <RoadMapCard
                title = "Full Stack"
                link = "https://roadmap.sh/full-stack"
                isFirstRoadMap
            />
            <RoadMapCard
                title = "Cyber Security"
                link = "https://roadmap.sh/cyber-security"
                isFirstRoadMap
            />
        </div>
        <div className="line2">
            <RoadMapCard
                title = "Backend"
                link = "https://roadmap.sh/backend"
            />
            <RoadMapCard
                title = "Android"
                link = "https://roadmap.sh/android"
                isFirstRoadMap
            />
            <RoadMapCard
                title = "React Native"
                link = "https://roadmap.sh/react-native"
                isFirstRoadMap
            />
        </div>
        <div className="line3">
            <RoadMapCard
                title = "DevOps"
                link = "https://roadmap.sh/devops"
            />
            <RoadMapCard
                title = "UX Design"
                link = "https://roadmap.sh/ux-design"
                isFirstRoadMap
            />
            <RoadMapCard
                title = "Flutter"
                link = "https://roadmap.sh/flutter"
                isFirstRoadMap
            />
        </div>
    </div>
    <div className="divider2">
        <span className="styled-text2">
            Skill Based Roadmaps
        </span>
    </div>
    <div className="sbcontainer">
        <div className="sbline1">
            <RoadMapCard
                title = "Computer Science"
                link = "https://roadmap.sh/computer-science"
            />
            <RoadMapCard
                title = "Vue"
                link = "https://roadmap.sh/vue"
                isFirstRoadMap
            />
        </div>
        <div className="sbline2">
            <RoadMapCard
                title = "React"
                link = "https://roadmap.sh/react"
            />
            <RoadMapCard
                title = "JavaScript"
                link = "https://roadmap.sh/javascript"
                isFirstRoadMap
            />
        </div>
        <div className="sbline3">
            <RoadMapCard
                title = "Angular"
                link = "https://roadmap.sh/angular"
            />
            <RoadMapCard
                title = "Node.js"
                link = "https://roadmap.sh/nodejs"
                isFirstRoadMap
            />
        </div>
    </div>
    
    </>
  )
}
