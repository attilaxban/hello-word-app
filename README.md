# Hello World App Deployment with ECR and EKS using GitHub Actions

## Overview

This project is a simple "Hello World" web application designed to demonstrate continuous integration and deployment (CI/CD) using GitHub Actions. When code is pushed to the repository, the project automatically builds a Docker image, uploads it to AWS Elastic Container Registry (ECR), and then restarts the Kubernetes pod in an Amazon Elastic Kubernetes Service (EKS) cluster to run the latest version of the app.

## Project Structure

- `Dockerfile`: Defines the steps to build a Docker image for the application.
- `deployment.yaml`: Kubernetes deployment configuration for the EKS cluster.
- `.github/workflows/main.yaml`: GitHub Actions workflow for CI/CD, which builds the Docker image, pushes it to ECR, and restarts the app in the EKS cluster.
- `terraform/`: Terraform configuration files to provision the EKS cluster and associated resources.

## Prerequisites

- AWS account with access to ECR and EKS.
- Kubernetes configured locally with `kubectl` and access to the EKS cluster.
- Terraform installed for managing infrastructure.
- GitHub repository with GitHub Actions enabled.

## How it works

2. **Dockerfile**: The Dockerfile is used to containerize the app. It defines the necessary instructions to build the Docker image.

3. **Kubernetes Deployment**: 
   - The `deployment.yaml` file contains the Kubernetes deployment configuration, which defines the pod template for running the app on EKS.
   - The pod uses the Docker image that is stored in ECR.

4. **GitHub Actions**:
   - The `main.yaml` file in `.github/workflows/` is a CI/CD pipeline that triggers on push events.
   - It builds the Docker image and pushes it to AWS ECR.
   - After the image is uploaded, the workflow restarts the Kubernetes pod running on the EKS cluster to ensure the latest image is deployed.

5. **Terraform**: 
   - The `terraform/` directory contains the Terraform scripts to provision the EKS cluster and other required AWS resources.
   - After running the Terraform script, your infrastructure will be ready to deploy the app.

## CI/CD Process

The CI/CD pipeline is automated using GitHub Actions and follows this process:

1. **Code Push**: When changes are pushed to the repository, the GitHub Actions workflow is triggered.
2. **Docker Build**: The app is containerized using the `Dockerfile`, and a new Docker image is created.
3. **ECR Push**: The Docker image is pushed to the Amazon ECR repository.
4. **EKS Update**: The Kubernetes pod in the EKS cluster is restarted with the new Docker image to ensure the latest version of the app is deployed.

## Setup Instructions
***Store your credentials  (AWS credentials and ECR registry) in github secrets***

## Create an ECR on AWS management console
## Create infrastructure (configure with your own AWS credentials at main.tf)

   ***sh'''
      cd terraform
      terraform init
      terraform plan
      terraform apply
   '''***

## Modify main.yaml with your credentials

## Setup EKS
1. **Create your own secret.yaml (use secret.sample.yaml)**
2. **Use your own ECR in deployment for building image**
3. **Login to EKS with:** ***aws eks update-kubeconfig --region region-code --name my-cluster***
4. ***sh '''
   kubectl apply -f secret.yaml
   kubectl apply -f deployment.yaml
'''***
