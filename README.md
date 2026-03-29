# Julioall/claris-ia

Este repositorio publico recebe somente o build estatico da aplicacao.

- Os arquivos publicados ficam em `site/`.
- Repositorio fonte privado: `Julioall/claris` @ `3d4428b157c3db6dd133404debb518c79e3e3bff`
- O codigo-fonte, migrations e logica sensivel permanecem no repositorio privado e nas Edge Functions.
- Alteracoes manuais neste repositorio podem ser sobrescritas no proximo deploy.

## Publicacao

O deploy do GitHub Pages e feito pelo workflow versionado neste repositorio, usando apenas os artefatos gerados no pipeline do repositorio privado.
