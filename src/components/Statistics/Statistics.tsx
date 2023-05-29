import './Statistics.scss';

interface StatisticsProps {
    stat: {
        docx: string;
        pdf: string;
        mp: string;
        psd: string;
    }
}

function Statistics(props: StatisticsProps) {
    const percentTemplate = (value: string) => {
        return value + ' %';
    };

    return (
        <div className="statistics">
            <div className="statistics-top">
                <p className="statistics-title">Upload Status</p>
            </div>
            <div className="statistics-bottom">
                <div className="statistics-docx statistics-item">
                    <h3 className="statistics-caption">.docx</h3>
                    <p className="statistics-value">{percentTemplate(props.stat.docx)}</p>
                </div>
                <div className="statistics-pdf statistics-item">
                    <h3 className="statistics-caption">.pdf</h3>
                    <p className="statistics-value">{percentTemplate(props.stat.pdf)}</p>
                </div>
                <div className="statistics-mp statistics-item">
                    <h3 className="statistics-caption">.mp3</h3>
                    <p className="statistics-value">{percentTemplate(props.stat.mp)}</p>
                </div>
                <div className="statistics-psd statistics-item">
                    <h3 className="statistics-caption">.psd</h3>
                    <p className="statistics-value">{percentTemplate(props.stat.psd)}</p>
                </div>
            </div>
        </div>
    );
}

export default Statistics;