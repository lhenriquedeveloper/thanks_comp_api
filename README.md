<h1 align="center">Thanks Comp API</h1> 
<p align="center">API do Projeto Thanks Comp. Uma Aplicação para auxiliar no processo de doação de componentes de hardware</p> 

<p align="center">
<a href="https://tasty-neckerchief-ox.cyclic.app//">
Link da API
</a> 
</p>

<h3 align="center">Sumário:</h3>
<p align="center">
 <a>Sobre</a> •
 <a>Como Usar?</a> • 
 <a>Rotas</a> •
 <a>Tecnologias Utilizadas</a> • 
 <a>Imagens</a> • 
 <a>Autor</a>
</p>

## :page_with_curl: **Sobre**

"<i>Thanks Comp API</i>" é um projeto baseado no Thanks Comp original que foi desenvolvido utilizando um BasS (Back-End as Service).

Para fins de estudos, decidi replicar as funcionalidades da aplicação é um back-end desenvolvido por mim mesmo até o processo de deploy.


## :thinking: **Como Usar?**

O deploy da aplicação foi feito na Cyclic.

Caso queira rodar a aplicação localmente, siga o passo a passo abaixo:

```bash
# Clone este repositório
$ git clone 

# Acesse a pasta do projeto no terminal/cmd
$ cd thanks_comp_api

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

```

## 🛣️ Rotas:

### Criar usuário
#### {{ _.url }}/auth/register - POST

Recebe em JSON:
{
	"name":
	"email":
	"phone":
	"password":
	"confirmpassword":
	"city":
}

Retorna em JSON
{
	"msg": "User created successfully"
}

### Realizar Login
#### {{ _.url }}/auth/login - POST

Recebe em JSON:
{
	"name":
	"email":
	"phone":
	"password":
	"confirmpassword":
	"city":
}

Retorna em JSON:
{
	"token": 
}

### Retornar usuários por ID
#### {{ _.url }}/user/:id - GET

Retorna em JSON:
{
	"_id":
	"name":
	"email": 
	"phone": 
	"city": 
	"__v": 
}

### Criar Post
#### {{ _.url }}/post - POST

Recebe em Multipart Form: {description, file, title, user}

Retorna em JSON:
{
	"description": 
	"imagePath": 
	"filename": 
	"title": 
	"user": 
	"_id": 
	"__v": 
}

### Retorna todos os Posts
#### {{ _.url }}/post - GET

Retorna em JSON:
{
		"_id": 
		"description": 
		"imagePath": 
		"filename": 
		"title": 
		"user": {
			"_id": 
			"name": 
			"email": 
			"phone": 
			"city": 
			"__v": 
		},
		"__v": 
	}
  
### Deleta POST por ID
#### {{ _.url }}/post/:id - Delete

Retorna em JSON:
{
	"msg": "Post deleated sucefully"
}

### Atualiza POST por ID
#### Pendente


## :construction_worker: Tecnologias Utilizadas:

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />


## :framed_picture:	Imagens


![Captura de tela 2023-04-08 190158](https://user-images.githubusercontent.com/62040725/233225175-a52a4905-df03-440e-8acc-053092fa3596.png)


## :art: Autor
<a href="https://github.com/lhenriquedeveloper">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62040725?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Desenvolvido por Luis Henrique</b></sub></a> <a href="https://github.com/lhenriquedeveloper"></a>
 

[![Twitter Badge](https://img.shields.io/badge/-@LuisHenrique24-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/LuisHenrique24)](https://twitter.com/LuisHenrique24) 
[![Linkedin Badge](https://img.shields.io/badge/-LuisHenrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/lhenriquedev/)](https://www.linkedin.com/in/lhenriquedev/) 
[![Gmail Badge](https://img.shields.io/badge/-sousarodriguesluishenrique@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:sousarodriguesluishenrique@gmail.com)](mailto:sousarodriguesluishenrique@gmail)

