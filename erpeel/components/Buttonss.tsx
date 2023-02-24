type buttontype = {
    title: string;
}

const Buttonss = ({title}:buttontype) => {

    return(
        <button>
            <a href="google.com">{title}</a>
        </button>
    );
}

export default Buttonss