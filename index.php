<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css">
    </head>
    <body>
    <div class="page-content page-container" id="page-content">
    <div>
        <div class="row container d-flex justify-content-center">
            <div class="col-md-6">
                <div class="card px-3">
                    <div class="card-body">
                        <h4 class="card-title">Awesome Todo list</h4>
                        <div class="add-items d-flex"> 
                            <input type="text" 
                                class="form-control todo-list-input" 
                                id = "input-text"
                                placeholder="What do you need to do today?"> 
                        <button class="add btn btn-primary font-weight-bold todo-list-add-btn"
                                id = "btn-submit">Add</button> 
                        </div>
                        <div class="list-wrapper">
                            <ul class="d-flex flex-column-reverse todo-list" id="todo-list">
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        <script src="/javascript/list.js"></script>
    </body>
</html>