import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterLink],
  templateUrl: './certificado.component.html',
  styleUrl: './certificado.component.scss'
})
export class CertificadoComponent {

  isImageOpen = false;  // Controle de visibilidade do overlay
  selectedImage: string = '';  // A imagem que será exibida no overlay

  // Método para abrir a imagem no overlay
  openImage(image: string) {
    this.selectedImage = image;
    this.isImageOpen = true;
  }

  // Método para fechar o overlay
  closeImage() {
    this.isImageOpen = false;
    this.selectedImage = '';
  }
  
  activeSection: string = 'home';

  constructor(private router: Router) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const sections = ["home", "sobre", "certificados", "skills", "formacao", "projetos", "contato"];
    
    for (let section of sections) {
      const element = document.getElementById(section);
      if (element && element.getBoundingClientRect().top <= 150) {
        this.activeSection = section;
      }
    }
  }

  isActive(section: string): boolean {
    return this.activeSection === section;
  }

  @HostListener('click', ['$event'])
  onLinkClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
      event.preventDefault();
      const elementId = target.getAttribute('href')?.substring(1);
      const element = document.getElementById(elementId!);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Atualiza a URL sem recarregar a página
        this.router.navigate([], { fragment: elementId });
      }
    }
  }


    certificados = [
      {
        titulo: "Amazon VPC: configurando redes na AWS",
        empresa: "Alura",
        data: "Ago de 2024",
        logo: "assets/desenvolvimento/aws vpc.png",
        link: "https://cursos.alura.com.br/certificate/912676e9-1287-434d-8551-2380b24b9baa?lang"
      },
      {
        titulo: "Consultas SQL: avançando no SQL com MySQL",
        empresa: "Alura",
        data: "Ago de 2024",
        logo: "assets/desenvolvimento/sql.png",
        link: "https://cursos.alura.com.br/certificate/3f669e07-b560-4bb4-bcb2-43d27906a548?lang"
      },
      {
        titulo: "Docker: criando e gerenciando containers",
        empresa: "Alura",
        data: "Ago de 2024",
        logo: "assets/desenvolvimento/docker.png",
        link: "https://cursos.alura.com.br/certificate/8f8da85f-840a-429d-be2a-2d5fadb1df19?lang"
      },
      {
        titulo: "Java Reflection: simplifique a conversão de objetos",
        empresa: "Alura",
        data: "Ago de 2024",
        logo: "assets/desenvolvimento/reflection.png",
        link: "https://cursos.alura.com.br/certificate/9d914f5d-abb9-4647-aef9-8d8c761637bd?lang"
      },
      {
        titulo: "Microsserviços na prática: mensageria com RabbitMQ",
        empresa: "Alura",
        data: "Ago de 2024",
        logo: "assets/desenvolvimento/ms.png",
        link: "https://cursos.alura.com.br/certificate/f41877e7-7f22-4704-b9ee-46fb38c5c3ec?lang"
      },
      {
        titulo: "GPT e Java: integre uma aplicação com a OpenAI",
        empresa: "Alura",
        data: "Jul de 2024",
        logo: "assets/desenvolvimento/image.png",
        link: "https://cursos.alura.com.br/certificate/991110f1-af8b-4820-ac74-fdced81d63ee?lang"
      },
      {
        titulo: "Java e JPA: consultas avançadas, performance e modelos complexos",
        empresa: "Alura",
        data: "Jul de 2024",
        logo: "assets/desenvolvimento/jpa.png",
        link: "https://cursos.alura.com.br/certificate/cf5db712-9f56-4599-a814-9bbf12c229c4?lang"
      },
      {
        titulo: "Microsserviços na prática: IaC com CDK e deploy na AWS",
        empresa: "Alura",
        data: "Jul de 2024",
        logo: "assets/desenvolvimento/ms1.png",
        link: "https://cursos.alura.com.br/certificate/831dfdd4-c730-4051-bd35-0843f8f333bb?lang"
      },
      {
        titulo: "Microsserviços na prática: implementando com Java e Spring",
        empresa: "Alura",
        data: "Jul de 2024",
        logo: "assets/desenvolvimento/msjava.png",
        link: "https://cursos.alura.com.br/certificate/d168b90e-758d-4294-bd76-1f4f6f65e11f?lang"
      },
      {
        titulo: "Microsserviços: padrões de projeto",
        empresa: "Alura",
        data: "Jul de 2024",
        logo: "assets/desenvolvimento/mspadrao.png",
        link: "https://cursos.alura.com.br/certificate/21473add-e598-4025-b838-e2b8299e3a48?lang"
      },
      {
        titulo: "Fullstack Spring Boot + ReactJS do Zero ao Deploy no Docker",
        empresa: "Udemy",
        data: "Mai de 2024",
        logo: "https://udemy-certificate.s3.amazonaws.com/image/UC-423a4281-6dd5-4cb4-8080-002c099507f1.jpg",
        link: "https://udemy-certificate.s3.amazonaws.com/image/UC-423a4281-6dd5-4cb4-8080-002c099507f1.jpg"
      },
      {
        titulo: "Boas práticas de programação: automatizando testes com Java",
        empresa: "Alura",
        data: "Abr de 2024",
        logo: "assets/desenvolvimento/boas.png",
        link: "https://cursos.alura.com.br/certificate/ad3da5cd-d7a4-475f-a01c-0c9a5863e391?lang"
      },
      {
        titulo: "Boas práticas de programação: melhore o código de uma API Java",
        empresa: "Alura",
        data: "Abr de 2024",
        logo: "assets/desenvolvimento/boas1.png",
        link: "https://cursos.alura.com.br/certificate/2c63eb70-a7af-45ae-b29d-904441668ee3?lang"
      },
      {
        titulo: "HTML e CSS: Classes, posicionamento e Flexbox",
        empresa: "Alura",
        data: "Abr de 2024",
        logo: "assets/desenvolvimento/html.png",
        link: "https://cursos.alura.com.br/certificate/1f6c0077-ac21-4538-a586-6715bfd25782?lang"
      },
      {
        titulo: "HTML e CSS: cabeçalho, footer e variáveis CSS",
        empresa: "Alura",
        data: "Abr de 2024",
        logo: "assets/desenvolvimento/css.png",
        link: "https://cursos.alura.com.br/certificate/29dc82d2-8d8f-4819-9f8b-eea660b3305e?lang"
      },
      {
        titulo: "Java e refatoração: melhorando códigos com boas práticas",
        empresa: "Alura",
        data: "Abr de 2024",
        logo: "assets/desenvolvimento/refatoracao.png",
        link: "https://cursos.alura.com.br/certificate/20f5b9fd-0873-4ed8-8087-0d82ae679e4f?lang"
      },
      {
        titulo: "Domine Microservicos e Mensageria com Spring Cloud e Docker",
        empresa: "Udemy",
        data: "Mar de 2024",
        logo: "assets/desenvolvimento/msudemy.png",
        link: "https://www.udemy.com/certificate/UC-93f864fc-ebde-4ab3-8a76-fad2f2812189/"
      },
      {
        titulo: "Java exceções: aprenda a criar, lançar e controlar exceções",
        empresa: "Alura",
        data: "Mar de 2024",
        logo: "assets/desenvolvimento/excecao.png",
        link: "https://cursos.alura.com.br/certificate/69e20096-7397-441f-98c3-2457745473ef"
      },
      {
        titulo: "Java: trabalhando com listas e coleções de dados",
        empresa: "Alura",
        data: "Mar de 2024",
        logo: "assets/desenvolvimento/listas.png",
        link: "https://cursos.alura.com.br/certificate/cf0e0e41-a301-4fd8-a056-de2d2e204954"
      },
      {
        titulo: "Swagger: documentando suas APIs",
        empresa: "Alura",
        data: "Mar de 2024",
        logo: "assets/desenvolvimento/swagger.png",
        link: "https://cursos.alura.com.br/certificate/b468f7ec-cfae-416f-9bbb-19254374af36"
      },
      {
        titulo: "Amazon Lightsail: descomplicando a nuvem",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/lightsail.png",
        link: "https://cursos.alura.com.br/certificate/7a80dab4-4cff-4dd8-8547-91dc699b9995"
      },
      {
        titulo: "Formação Java e Spring Boot",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/java.png",
        link: "https://cursos.alura.com.br/degree/certificate/7c820fc5-7088-4127-b7de-85ba0681183b"
      },
      {
        titulo: "Java: criando sua primeira API e conectando ao front",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/javaconect.png",
        link: "https://cursos.alura.com.br/certificate/6dd63091-a19d-4743-94ca-691a9399ac4f"
      },
      {
        titulo: "Java: persistência de dados e consultas com Spring Data JPA",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/java jpa.png",
        link: "https://cursos.alura.com.br/certificate/10988b58-5994-480b-abea-e1a13b304d1e"
      },
      {
        titulo: "Java: trabalhando com lambdas, streams e Spring Framework",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/lambda.png",
        link: "https://cursos.alura.com.br/certificate/0db0b989-2523-4279-965a-d5e1168db48e"
      },
      {
        titulo: "SQL com MySQL: manipule e consulte dados",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/mysql.png",
        link: "https://cursos.alura.com.br/certificate/a3af055f-7dde-49e7-a483-6ba05e71dd8a"
      },
      {
        titulo: "Spring Boot 3: documente, teste e prepare uma API para o deploy",
        empresa: "Alura",
        data: "Fev de 2024",
        logo: "assets/desenvolvimento/sb3.png",
        link: "https://cursos.alura.com.br/certificate/3a2af191-3f10-425a-b261-0d96b00d0091"
      },
      {
        titulo: "Git e GitHub: compartilhando e colaborando em projetos",
        empresa: "Alura",
        data: "Jan de 2024",
        logo: "assets/desenvolvimento/git.png",
        link: "https://cursos.alura.com.br/certificate/4d0d6c3e-3f3b-4cb6-89c6-ef10f8a9ebec"
      },
      {
        titulo: "Java: aplicando a Orientação a Objetos",
        empresa: "Alura",
        data: "Jan de 2024",
        logo: "assets/desenvolvimento/objetos.png",
        link: "https://cursos.alura.com.br/certificate/ac661605-00d3-4784-9e78-2bb627f355db"
      },
      {
        titulo: "Spring Boot 3: aplique boas práticas e proteja uma API Rest",
        empresa: "Alura",
        data: "Jan de 2024",
        logo: "assets/desenvolvimento/boaspra.png",
        link: "https://cursos.alura.com.br/certificate/626ff5f3-d686-4d2e-a1b2-e5e2ae7670bb"
      },
      {
        titulo: "Spring Boot 3: desenvolva uma API Rest em Java",
        empresa: "Alura",
        data: "Jan de 2024",
        logo: "assets/desenvolvimento/sb 3.png",
        link: "https://cursos.alura.com.br/certificate/b8edbb25-6c92-4813-b606-0cc495b42e87"
      },
      {
        titulo: "Java COMPLETO Programação Orientada a Objetos + Projetos",
        empresa: "Udemy",
        data: "Dez de 2023",
        logo: "https://udemy-certificate.s3.amazonaws.com/image/UC-e42d4599-ee8d-4572-9421-842e07d627bd.jpg",
        link: "lhttps://cursos.alura.com.br/certificate/b8edbb25-6c92-4813-b606-0cc495b42e87"
      }
    ];
  }
  