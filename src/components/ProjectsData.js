import UIUX from '../../public/images/uiux.png';
import Text from '../../public/images/textedit.png';
import Personal from '../../public/images/personal.png';
import Photo from '../../public/images/photo.png';
import First from '../../public/images/first.png'

const ProjectsData = [
    {
        key: 1,
        name: 'Design Portfolio',
        desc: 'A mock up website for a UI UX designer',
        image: UIUX,
        link: 'https://webdeisgnkylielallak.vercel.app/'
    },
    {
        key: 2,
        name: 'Old Personal Website',
        desc: 'My first personal website ',
        image: Personal,
        link: 'https://kylie-lallak-personal-website.vercel.app/'

    },

    {
        key: 4,
        name: 'Photographer Webpage',
        desc: 'A photographer portfolio mock up website',
        image: Photo,
        link: 'https://photographer-personal-website.vercel.app/'

    },
    {
        key: 3,
        name: 'Text Editor',
        desc: 'A console based text file editor',
        image: Text,
        link: 'https://github.com/Kylie-Lallak/text-editor'

    },
    {
        key: 5,
        name: 'Company Website',
        desc: 'My first frist ever website',
        image: First,
        link: 'https://fake-company-career-site.vercel.app/'

    }

];

export default ProjectsData;