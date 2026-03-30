# Julioall/claris-ia

Este repositorio publico recebe somente o build estatico da aplicacao.

- Os arquivos publicados ficam em `site/`.
- Repositorio fonte privado: `Julioall/claris` @ `dc41110bc7fd88d4b46393f33c3d880bd4a9b1a7`
- O codigo-fonte, migrations e logica sensivel permanecem no repositorio privado e nas Edge Functions.
- Alteracoes manuais neste repositorio podem ser sobrescritas no proximo deploy.

## Publicacao

O deploy do GitHub Pages e feito pelo workflow versionado neste repositorio, usando apenas os artefatos gerados no pipeline do repositorio privado.
