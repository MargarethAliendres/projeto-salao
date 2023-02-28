export interface IProduto {      //leva essa interface para a classe dos produtos
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
  }
  
  export interface IProdutoCarrinho extends IProduto{  //vai ter tudo acima e vamos acrescentar abaixo algumas coisas//
  
      quantidade: number;    // quantidade selecioanda na hora da compra//
    
  }
  
  export const produtos: IProduto[] = [
    
    { id: 2, descricao: "Monitor muito bom", preco: 1200.50, descricaoPreco: "À vista no PIX", imagem:"./assets/2.jpg", quantidadeEstoque: 2 },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem:"./assets/3.jpg", quantidadeEstoque: 50 },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista no PIX", imagem:"./assets/4.jpg", quantidadeEstoque: 1000},
    { id: 6, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem:"./assets/6.jpg", quantidadeEstoque: 70},
    { id: 8, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "./assets/7.jpg", quantidadeEstoque: 15},
    { id: 9, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem:"./assets/8.jpg", quantidadeEstoque: 25 },
    { id: 10, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem:"./assets/9.jpg", quantidadeEstoque: 10},
    { id: 11, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem:"./assets/10.jpg", quantidadeEstoque: 35 },

    
   
 
  ]
  