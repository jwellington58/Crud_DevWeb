const instituicoes = []
const alunos = []
var idInst = 0
var idAlu = 20182135000090
//FUnção para salvar as Instituições
function salvarInstituicao() {
  let inst = {
    nome: document.getElementById('input_instituicao').value,
    id: idInst
  }
 
  idInst++
  instituicoes.push(inst)
  instituicoes.sort(byNome)
  montarListInstituicao()
  montarSelect()
  document.getElementById('input_instituicao').value = ''
}
//Função para salvar os Alunos 
function salvarAluno(){
  let alu = {
    nome: document.getElementById('input_aluno').value,
    matricula: idAlu,
    instituicao: document.getElementById('select_inst').value
  }
  idAlu++
  alunos.push(alu)
  alunos.sort(byNome)
  montarListAluno()
  document.getElementById('input_aluno').value = ''
}

function excluirInstituicao(index){
  var flag = verificaIntituicao(index)
  if(flag){
    instituicoes.splice(index, 1)
    let listI = document.getElementById('list_instituicao')
    listI.removeChild(listI.children[index])
    montarListInstituicao()
    montarSelect()
  }else{
    alert('Esta instituição não pode ser apagada')
  }
  
}

function excluirAluno(index){
  alunos.splice(index, 1)
  let listA = document.getElementById('list_aluno')
  listA.removeChild(listA.children[index])
  montarListAluno()
}

function montarSelect() {
  let selectInstituicoes = document.getElementById('select_inst')
  selectInstituicoes.innerHTML = ''
  //instituicoes.sort()
  instituicoes.forEach( instituicao => {
    let option = document.createElement('option')
    option.text = instituicao.nome
    option.value = instituicao.id
    selectInstituicoes.add(option)
  })
  
}

function montarListAluno() {
  let lista = document.getElementById('list_aluno').innerHTML
  lista = ''
  let index = 0
  alunos.forEach(aluno => {
    lista = lista + '<li>' + 'Aluno: ' + aluno.nome +  ' Matricula: ' + aluno.matricula + ' Instituicao: ' + aluno.instituicao + 
            
            '<button type="button" style="margin: 5px" class="btn btn-success" onclick="editarAluno('+index+')">editar</button>' +        
            '<button type="button" style="margin: 5px" class="btn btn-danger" onclick="excluirAluno('+index+')">excluir</button>' +
            
            '</li>'
    document.getElementById('list_aluno').innerHTML = lista

  })
}

function montarListInstituicao() {
  let lista = document.getElementById('list_instituicao').innerHTML
  lista = ''
  let index = 0
  instituicoes.forEach(instituicao => {
    lista = lista + '<li>' + 'Instituicão: ' + instituicao.nome +  ' Id: ' + instituicao.id + 
                      '<button type="button" style="margin: 5px" class="btn btn-success" onclick="editarInstituicao('+index+')">editar</button>' +        
                      '<button type="button" style="margin: 5px" class="btn btn-danger" onclick="excluirInstituicao('+index+')">excluir</button>' +
                    '</li>'

    document.getElementById('list_instituicao').innerHTML = lista
    index++
  })
}

function verificaIntituicao(index) {
  var instId = instituicoes[index].id
    for (aluno of alunos) {
      if(aluno.instituicao == instId){
        return false
      }
    }
    return true;
}

function byNome(a, b) {
  return a.nome > b.nome
}