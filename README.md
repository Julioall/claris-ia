# Julioall/claris-ia

Este repositorio publico recebe somente o build estatico da aplicacao.

- Os arquivos publicados ficam em `site/`.
- Repositorio fonte privado: `Julioall/claris` @ `0cb794c643d741eda3e9320c34d0f533c08896f2`
- O codigo-fonte, migrations e logica sensivel permanecem no repositorio privado e nas Edge Functions.
- Alteracoes manuais neste repositorio podem ser sobrescritas no proximo deploy.

## Publicacao

O deploy do GitHub Pages e feito pelo workflow versionado neste repositorio, usando apenas os artefatos gerados no pipeline do repositorio privado.
