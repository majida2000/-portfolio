import React from "react"
import { Card } from 'primereact/card';
import * as bootstrap from 'bootstrap';
import BackendCertificat from "../assets/BackendApps.png"
import DevopsCertificat from "../assets/DevOps.png"
import AgileCertificat from "../assets/Agile.png"
import CloudCertificat from "../assets/CloudComputing.png"



export default function Certificats(){
    const bootstrap = 'some value';
    const backend = <img alt="logo" src={BackendCertificat}  height="300"  className="rounded-lg"></img>;
    const devops = <img alt="logo" src={DevopsCertificat}  height="300"  className="rounded-lg"></img>;
    const agile = <img alt="logo" src={AgileCertificat}  height="300"  className="rounded-lg"></img>;
    const cloud = <img alt="logo" src={CloudCertificat}  height="300"  className="rounded-lg"></img>;

    return(



        <div>
            <h3 className="text-4xl py-4 mt-5  text-center font-semibold ">Certificats:</h3>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">

                    <Card
                        title="Developing Back-End Apps with Node.js and Express"
                        subTitle="Certificate of Specialization"
                        header={<div className="px-4 pt-4 " >{backend}  </div>}
                        className="md:w-25rem h-full"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0 justify-content-center">
                        Create server-side applications using the Node.js JavaScript run time.  
                        Extend your Node.js applications with third-party packages and frameworks, including Express.   
                        Use npm to manage Node.js packages in your Node.js application.   
                        Develop asynchronous callback functions and promises to complete asynchronous operations.     

                        </p>
                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="DevOps, Cloud, and Agile Foundations "
                        subTitle="Certificate of Specialization"
                        header={<div className="px-4 pt-4 " >{devops}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                        In this Specialization, learners developed foundational knowledge in
                        DevOps, including the culture, technology, and skills needed to
                        succeed as a DevOps practitioner. This Specialization also familiarized
                        learners with tools and technologies used by DevOps practitioners.
                        Completers of this Specialization should be able to: Define Cloud
                        Computing and explain its essential characteristics, models, benefits,
                        infrastructure, & emerging trends, and create a cloud account;
                        Describe the DevOps culture, its benefits, and its associated skills,
                        technology, tools, processes, methodologies, and metrics; Explain the
                        Agile philosophy, how to work as an Agile team, and Scrum
                        methodology, including the roles, meetings, rules, and artifacts; and
                        how to write user stories and execute Sprint Plans.
                        </p>
                    </Card>
                </div>
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Introduction to DevOps"
                        subTitle="Course Certificate"
                        header={<div className="px-4 pt-4 " >{agile}</div>}
                        className="md:w-25rem"
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0">
                        The essential characteristics of DevOps including building a culture of shared responsibility, transparency, and embracing failure. 
                        The importance of Continuous Integration and Continuous Delivery, Infrastructure as Code, Test Driven Development, Behavior Driven Development.
                        Essential DevOps concepts: software engineering practices, cloud native microservices, automated continuous deployments, and building resilient code.
                        The organizational impact of DevOps, including breaking down silos, working in cross functional teams, and sharing responsibilities.
                        </p>
                    </Card>
                </div>
            </div>

            <div className="flex flex-wrap mx-4">
                <div className="w-full md:w-1/3 px-4 mt-5">
                    <Card
                        title="Introduction to Cloud Computing"

                        subTitle="Course Certificate"
                        header={<div className="px-4 pt-4 " >{cloud}</div>}
                        className="md:w-25rem "
                        style={{backgroundColor:'#F5F3F6E0'}}
                    >
                        <p className="m-0 justify-content-center">
                        Define cloud computing and explain essential characteristics, history, the business case for cloud, and the emerging technologies enabled by cloud
                        Describe the cloud service models Describe cloud service models, cloud deployment models, and cloud infrastructure
                        Explain emerging Cloud related trends including HybridMulticloud, Microservices, Serverless, Cloud Native, DevOps, and Application Modernization
                        Create IBM Cloud account and provision an instance of cloud object storage service to host a static webpage.  
                        </p>
                    </Card>
                </div>
               
            </div>

        </div>

    );
}