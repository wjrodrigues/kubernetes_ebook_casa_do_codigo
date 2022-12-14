# Kubernetes Study

Contents of this repository were created while reading the **Kubernetes - Tudo sobre orquestração de contêineres (Casa do Código)**
## Structure

**simple-node-api**: API that demonstrates the use of
- [Image production](https://docs.docker.com/engine/reference/builder/)
- [Service](https://kubernetes.io/docs/concepts/services-networking/service/)
- [Pod](https://kubernetes.io/docs/concepts/workloads/pods/)
- [Ingress](https://kubernetes.io/docs/concepts/services-networking/ingress/)

**volumes**: Using volumes in k8s
- [emptyDir](https://kubernetes.io/pt-br/docs/concepts/storage/volumes/#emptydir)
- [PersistentVolume](https://kubernetes.io/pt-br/docs/concepts/storage/persistent-volumes/)
- [PersistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims)

**secrets**: Protecting confidential data
- [volume](https://kubernetes.io/docs/concepts/configuration/secret/#use-case-dotfiles-in-a-secret-volume)
- [env](https://kubernetes.io/docs/concepts/configuration/secret/#using-secrets-as-environment-variables)

**config-map**: Environment variables
- [env](https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-object)
- [volumes](https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-object)

**deploy**: Deployment provides declarative updates for Pods and ReplicaSets.
- [revisionHistoryLimit](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#revision-history-limit)
- [strategy](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy)
- [checking-rollout-history-of-a-deployment](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#checking-rollout-history-of-a-deployment)

**hpa**: Horizontal Pod Autoscaling
- [horizontal-pod-autoscale](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/)

**job/cronjob**: A Job creates one or more Pods and will continue to retry execution of the Pods until a specified number of them successfully terminate.
- [job](https://kubernetes.io/docs/concepts/workloads/controllers/job/#running-an-example-job)
- [cronjob](https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/)

## References
- [Ebook](https://www.casadocodigo.com.br/products/livro-kubernetes)
- [Kubernetes](https://kubernetes.io/)