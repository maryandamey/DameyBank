<?php
session_start();
include('conf/config.php');
include('conf/checklogin.php');
check_login();
$client_id = $_SESSION['client_id'];

// Check if the client has already applied for a loan
$stmt = $mysqli->prepare("SELECT * FROM loans WHERE client_id = ?");
$stmt->bind_param("i", $client_id);
$stmt->execute();
$res = $stmt->get_result();
$loans = $res->fetch_all(MYSQLI_ASSOC);
$stmt->close();

$last_loan = end($loans);
$loan_exists = count($loans) > 0;

$loan_status = null;
$loan_amount = null;
$loan_purpose = null;

if ($loan_exists) {
  $loan_status = $last_loan['status'];
  $loan_amount = $last_loan['amount'];
  $loan_purpose = $last_loan['purpose'];
}

if (isset($_POST['applyLoan'])) {
  $amount = $_POST['amount'];
  $purpose = $_POST['purpose'];

  $stmt = $mysqli->prepare("INSERT INTO loans (client_id, amount, purpose, status) VALUES (?, ?, ?, 'pending')");
  $stmt->bind_param("ids", $client_id, $amount, $purpose);
  $stmt->execute();
  $stmt->close();
  // Redirect or show success message
  header("Refresh:0");
  // exit();
}
?>

<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="content-type" content="text/html;charset=utf-8" />
  <?php include("dist/_partials/head.php"); ?>
</head>

<body class="hold-transition sidebar-mini">
  <div class="wrapper">
    <!-- Navbar -->
    <?php include("dist/_partials/nav.php"); ?>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <?php include("dist/_partials/sidebar.php"); ?>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Apply for Loan</h1>
            </div>
          </div>
        </div><!-- /.container-fluid -->
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <?php if (!$loan_exists || $loan_status == 'approved' || $loan_status == 'rejected') : ?>
                  <form method="post" action="">
                    <div class="form-group">
                      <label for="amount">Amount</label>
                      <input type="text" class="form-control" id="amount" name="amount" required>
                    </div>

                    <div class="form-group">
                      <label for="purpose">Type of loan</label>
                      <select class="form-control" id="purpose" name="purpose" required>
                        <option value="">Select Loan Type</option>
                        <option value="business_loan">Business Loan</option>
                        <option value="mortgage">Mortgage</option>
                        <option value="school_fees">Student loans</option>
                        <option value="home_equity">Home equity loans</option>
                        <option value="personal_loan">Personal loans</option>
                        <option value="recreation_loan">Recreation loans</option>
                        <option value="auto_loan">Auto loans</option>
                        <!-- Add other types of loans here -->
                      </select>
                    </div>

                    <button type="submit" name="applyLoan" class="btn btn-primary">Apply</button>
                  </form>
                <?php else : ?>
                  <div class="alert alert-warning" role="alert">
                    You cannot apply for another loan while you have a pending application.
                  </div>
                  <?php if ($loan_status == 'approved' || $loan_status == 'rejected') : ?>
                    <form method="post" action="">
                      <button type="submit" name="applyLoan" class="btn btn-primary">Apply for Another Loan</button>
                    </form>
                  <?php endif; ?>
                <?php endif; ?>

                <h2>Loan History</h2>
                <table class="table">
                  <thead>
                    <tr>
                      <th>Amount</th>
                      <th>Purpose</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php foreach ($loans as $loan) : ?>
                      <tr>
                        <td><?php echo $loan['amount']; ?></td>
                        <td><?php echo $loan['purpose']; ?></td>
                        <td><?php echo $loan['status']; ?></td>
                      </tr>
                    <?php endforeach; ?>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
    <?php include("dist/_partials/footer.php"); ?>

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
    </aside>
    <!-- /.control-sidebar -->
  </div>
  <!-- ./wrapper -->

  <!-- jQuery -->
  <script src="plugins/jquery/jquery.min.js"></script>
  <!-- Bootstrap 4 -->
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- AdminLTE App -->
  <script src="dist/js/adminlte.min.js"></script>
</body>

</html>
