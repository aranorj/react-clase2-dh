import SearchWrap from './SearchWrap'
import MenuWrap from './MenuWrap'
import ContentWrap from './ContentWrap'

export default function Dashboard (){
    return (
        <div className="dashboard">
        <SearchWrap/>
        <MenuWrap/>
        <ContentWrap/>
        </div>
    )
}
