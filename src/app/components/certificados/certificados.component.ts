import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.scss'
})
export class CertificadosComponent {


    certificados = [
      {
        titulo: "Google Cybersecurity",
        empresa: "Google",
        data: "Novembro de 2024",
        logo: "assets/logos/google.png",
        link: "https://www.coursera.org/account/accomplishments/specialization/8AM7WKOCM3F6"
      },
      {
        titulo: "Introduction to Cybersecurity",
        empresa: "Cisco",
        data: "Setembro de 2024",
        logo: "assets/logos/ciscosecurity.png",
        link: "https://www.credly.com/badges/97e6c1f2-7d28-4d7f-8adf-3584ed8c4403"
      },
      {
        titulo: "AWS Certified Cloud Practitioner",
        empresa: "AWS",
        data: "Setembro de 2024",
        logo: "assets/logos/aws.png",
        link: "https://www.credly.com/badges/c9135e8e-024b-42b1-9654-940eb010ae1e/linked_in_profile"
      },
      {
        titulo: "Linux Fundamentos",
        empresa: "FIAP",
        data: "Outubro de 2024",
        logo: "assets/logos/fiap.png",
        link: "https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/128651/4d845488d5f5adc2fc8a953d88ce3ece/certificado.png"
      },
      {
        titulo: "CCNA: Introduction to Networks",
        empresa: "Cisco",
        data: "Setembro de 2024",
        logo: "assets/logos/cisco.png",
        link: "https://www.credly.com/badges/f1a46e80-c8ef-4e40-9984-3ae9a9056448/linked_in_profile"
      },
      {
        titulo: "NMAP e WIRESHARK para Segurança da Informação",
        empresa: "Udemy",
        data: "Março de 2025",
        logo: "assets/logos/udemynmap.png",
        link: "https://www.udemy.com/certificate/UC-362e7b67-f125-4aeb-8a3d-6e4ca98bc4aa/"
      },
      {
        titulo: "Fundamentos em Cibersegurança",
        empresa: "IBSEC - Instituto Brasileiro de Cibersegurança",
        data: "Julho de 2024",
        logo: "assets/logos/ibsec.png",
        link: "https://certs.ibsec.com.br/wp-content/uploads/tutor-certificates/GbMhBTYfjp-c228811ab967a937.jpg"
      },
      {
        titulo: "Amazon VPC: configurando redes na AWS",
        empresa: "Alura",
        data: "Agosto de 2024",
        logo: "assets/logos/aluravpc.png",
        link: "https://cursos.alura.com.br/certificate/912676e9-1287-434d-8551-2380b24b9baa"
      },
      {
        titulo: "Consultas SQL: avançando no SQL com MySQL",
        empresa: "Alura",
        data: "Agosto de 2024",
        logo: "assets/logos/alurasql.png",
        link: "https://cursos.alura.com.br/certificate/3f669e07-b560-4bb4-bcb2-43d27906a548?lang"
      },
      {
        titulo: "Docker: criando e gerenciando containers",
        empresa: "Alura",
        data: "Agosto de 2024",
        logo: "assets/logos/aluradocker.png",
        link: "https://cursos.alura.com.br/certificate/8f8da85f-840a-429d-be2a-2d5fadb1df19"
      },
      {
        titulo: "Microsserviços na prática: IaC com CDK e deploy na AWS",
        empresa: "Alura",
        data: "Julho de 2024",
        logo: "assets/logos/aluradeploy.png",
        link: "https://cursos.alura.com.br/certificate/831dfdd4-c730-4051-bd35-0843f8f333bb?lang"
      },
      {
        titulo: "GPT e Java: integre uma aplicação com a OpenAI",
        empresa: "Alura",
        data: "Julho de 2024",
        logo: "assets/logos/aluragpt.png",
        link: "https://cursos.alura.com.br/certificate/991110f1-af8b-4820-ac74-fdced81d63ee?lang"
      },
    ];
  }
  