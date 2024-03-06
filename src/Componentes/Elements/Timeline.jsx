import React from 'react'; 
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "/node_modules/primeflex/primeflex.css";


export default function TimeLine() {
    const events = [
    { status: 'Finalização Ensino Médio', date: '20/03/2021', text: 'Finalizei meu Ensino Médio pelo Institudo Federal de Educação, Ciências e Tecnologia do Maranhão (IFMA)', color: 'rgb(0, 174, 255)', image: 'game-controller.jpg' },
    { status: 'Tecnico em Eletrônica', date: '20/03/2021', text: 'Finalizei meu Cueso Tecnico em Eletrônica, juntamente com meu ensino médio pelo Institudo Federal de Educação, Ciências e Tecnologia do Maranhão (IFMA)', color: 'rgb(0, 174, 255)' },
    { status: 'Ciência da Computação', date: '01/09/2023', text: 'Ingressei na Universidade Federal do Maranhão (), no curso de Ciência da Computação', color: 'rgb(0, 174, 255)' },
];

const customizedMarker = (item) => {
    return (
        <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}> 
        </span>
    );
};

const customizedContent = (item) => {
    return (
        <Card title={item.status} subTitle={item.date} style={{backgroundColor: '#01091CBF'}}>
            <p>{item.text}
            </p>
        </Card>
    );
};
    
return (
    <div className="card">
        <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
    </div>
)
}
        