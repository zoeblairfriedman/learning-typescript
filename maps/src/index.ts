import { CustomMap } from './CustomMap';
import { User } from './User'
import { Company } from './Company'

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

customMap.addUserMarker(user)
customMap.addCompanyMarker(company)