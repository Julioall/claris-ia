# Julioall/claris-ia

Este repositorio publico recebe somente o build estatico da aplicacao.

- Os arquivos publicados ficam em `site/`.
- Repositorio fonte privado: `Julioall/claris` @ `6bacd98155ee72e4460829fd7c8a4a6691d96265`
- O codigo-fonte, migrations e logica sensivel permanecem no repositorio privado e nas Edge Functions.
- Alteracoes manuais neste repositorio podem ser sobrescritas no proximo deploy.

## Publicacao

O deploy do GitHub Pages e feito pelo workflow versionado neste repositorio, usando apenas os artefatos gerados no pipeline do repositorio privado.
